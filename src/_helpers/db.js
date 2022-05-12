import faunadb, {
  Create,
  Collection,
  Ref,
  Documents,
  Paginate,
  Lambda,
  Get,
  Map,
  Delete,
  Update
} from 'faunadb';
import { env, exit } from 'process';
import isLocalHost from '../settings/utils/isLocalHost';
import { alertService } from '../_services/alert.service';

const client = new faunadb.Client({
  secret: 'fnAEmZfZNpAARbpNzfs05789eQE_dsX-nExOPwoE',
  domain: 'db.eu.fauna.com',
  port: 443,
  scheme: 'https',
});

export const newItem = async (colc, data) => {
  return await client.query(
    Create(
      Collection(colc),
      {
        data: {
          ...data
        }
      }
    )
  );
};

export const getTransactionRef = async (colc, id) => {
  return await Ref(Collection(colc), id);
};

// Define the reference to the target set
export const getSetRef = async (collectionName) => {
  return await Documents(Collection(collectionName));
};

// All Transactions
export const allTransactions = async (colc) => {
  return await client.query(
    Map(
      Paginate(Documents(Collection(colc))),
      Lambda(x => Get(x))
    )
  );
};

export const updateTransaction = async (colc, id, data) => {
  return await client.query(
    Update(
      Ref(Collection(colc), id),
      {
        data: {
          ...data
        },
      }
    )
  );
};

export const deleteTransaction = async (colc, id) => {
  return await client.query(
    Delete(Ref(Collection(colc), id))
  );
};

export default client;
