package main

import (
	"net/http"
	"os"

	"github.com/omise/omise-go"
)

func main() {
	key := os.Getenv("OMISE_SKEY")
	if key == "" {
		panic("Please set OMISE_SKEY")
	}

	client, e := omise.NewClient("", key)
	if e != nil {
		panic(e)
	}

	if e := http.ListenAndServe(":8080", &TamboonHandler{client}); e != nil {
		panic(e)
	}
}
