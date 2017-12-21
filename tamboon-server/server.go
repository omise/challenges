package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/omise/omise-go"
	"github.com/omise/omise-go/operations"
)

type TamboonHandler struct {
	client *omise.Client
}

func (handler *TamboonHandler) ServeHTTP(resp http.ResponseWriter, req *http.Request) {
	method, path := req.Method, req.URL.Path
	fmt.Printf("%s %s\n", method, path)

	if method == "GET" && path == "/charities" {
		handler.GET(resp, req)

	} else if method == "POST" && path == "/donations" {
		handler.POST(resp, req)

	} else {
		http.NotFound(resp, req)

	}
}

func (handler *TamboonHandler) GET(resp http.ResponseWriter, req *http.Request) {
	if e := json.NewEncoder(resp).Encode(charities); e != nil {
		http.Error(resp, e.Error(), 500)
		return
	}
}

func (handler *TamboonHandler) POST(resp http.ResponseWriter, req *http.Request) {
	donation := &Donation{}
	defer req.Body.Close()

	if e := json.NewDecoder(req.Body).Decode(donation); e != nil {
		http.Error(resp, e.Error(), 400)
		return
	}

	charge, operation := &omise.Charge{}, &operations.CreateCharge{
		Card:        donation.Token,
		Amount:      donation.Amount,
		Currency:    "THB",
		Description: donation.Name,
	}
	if e := handler.client.Do(charge, operation); e != nil {
		http.Error(resp, e.Error(), 400)
		return
	}

	if e := json.NewEncoder(resp).Encode(&Result{Success: true}); e != nil {
		http.Error(resp, e.Error(), 500)
		return
	}
}
