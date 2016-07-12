package main

import (
	"github.com/omise/omise-go"
	"net/http"
)

const OMISE_SKEY = "skey_test_54hkqp52nrxqi8xtlny"

func main() {
	client, e := omise.NewClient("", OMISE_SKEY)
	if e != nil {
		panic(e)
	}

	if e := http.ListenAndServe(":8080", &TamboonHandler{client}); e != nil {
		panic(e)
	}
}
