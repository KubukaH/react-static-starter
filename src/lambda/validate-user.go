package main

import (
	"context"
	"fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// BodyStruct is the shape of the inbound JSON in the request.Body
type BodyStruct struct {
	Event      string `json:"event"`
	InstanceID string `json:"instance_id"`
	User       struct {
		ID          string `json:"id"`
		Aud         string `json:"aud"`
		Role        string `json:"role"`
		Email       string `json:"email"`
		AppMetadata struct {
			Provider string `json:"provider"`
		} `json:"app_metadata"`
		UserMetadata struct {
			FullName string `json:"full_name"`
		} `json:"user_metadata"`
		CreatedAt time.Time `json:"created_at"`
		UpdatedAt time.Time `json:"updated_at"`
	} `json:"user"`
}

func main() {
	// Create a Client and execute a ListDatabases operation.

	client, err := mongo.Connect(
		context.TODO(),
		options.Client().ApplyURI("mongodb+srv://basilwizi_01:basilwizi@basilwizi0.x9qlt.mongodb.net/Basilwizi0?retryWrites=true&w=majority"))
	if err != nil {
		log.Fatal(err)
	}
	defer func() {
		if err = client.Disconnect(context.TODO()); err != nil {
			log.Fatal(err)
		}
	}()

	collection := client.Database("Basilwizi0").Collection("accounts")
	result, err := collection.InsertOne(context.TODO(), bson.D{{"x", 1}})
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("inserted ID: %v\n", result.InsertedID)
}
