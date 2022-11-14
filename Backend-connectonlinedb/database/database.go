package database

import (
	"duomly.com/go-bank-backend/helpers"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

var DB *gorm.DB

func InitDatabase() {

	database, err := gorm.Open("postgres", "postgres://fyjiukqwnpnzco:8303f71689238915b93cd62cff7bfc57896bfbacfc79d4bffbf24f54426cf350@ec2-18-209-78-11.compute-1.amazonaws.com:5432/defrktvc99ipfq?sslmode=require")
	helpers.HandleErr(err)
	database.DB().SetMaxIdleConns(20)
	database.DB().SetMaxOpenConns(200)
	DB = database
}
