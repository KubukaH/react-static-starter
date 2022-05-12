const db = require('../_helpers/db');
const { Readable } = require('stream');

module.exports = {
    uploadTrack,
    downloadTrack,
    getAllTracks,
    delete: _delete
};

async function uploadTrack(params) {

  if (await db.Music.findOne({ trackName: params.trackName })) {
    throw 'This track ' + params.trackName + 'already exists';
  };

  const storage = multer.memoryStorage();

  const upload = multer({ storage: storage, limits: { fields: 1, fileSize: 6000000, files: 1, parts: 2 }});
  
  upload.single('track')(req, res, (err) => {
    if (err) {
      return res.status(400).json({ message: "Upload Request Validation Failed" });
    }

    const trackName = params.trackName;
    
    // Covert buffer to Readable Stream
    const readableTrackStream = new Readable();
    readableTrackStream.push(params.file);
    readableTrackStream.push(null);

    let bucket = new db.Music.GridFSBucket({
      bucketName: 'tracks'
    });

    let uploadStream = bucket.openUploadStream(trackName);
    let id = uploadStream.id;
    readableTrackStream.pipe(uploadStream);

    uploadStream.on('error', () => {
      return res.status(500).json({ message: "Error uploading file" });
    });

    uploadStream.on('finish', () => {
      return res.status(201).json({ message: "File uploaded successfully, stored under Mongo ObjectID: " + id });
    });
  });
}

async function getAllTracks() {
    const tracks = await db.Music.find();
    return tracks.map(x => basicDetails(x));
}

async function downloadTrack(id) {

  var trackID = await getMusic(id);

  let bucket = new db.Music.GridFSBucket({
    bucketName: 'tracks'
  });

  let downloadStream = bucket.openDownloadStream(trackID);

  return await downloadStream;
}

async function _delete(id) {
  const track = await getMusic(id);
  await track.remove();
}

// helper functions

async function getMusic(id) {
  if (!db.isValidId(id)) throw 'Music not found';
  const track = await db.Music.findById(id);
  if (!track) throw 'Music not found';
  return track;
}

function basicDetails(track) {
  const { id, trackName, created } = track;
  return { id, trackName, created };
}
