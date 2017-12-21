#!/usr/bin/make

GO_FILES := $(wildcard *.go)
SERVER_BIN := tamboon-server

default: run

build: $(SERVER_BIN)
$(SERVER_BIN):
	/usr/bin/env \
		CGO_ENABLED=0 \
		go build -o $(SERVER_BIN) -a -ldflags '-extldflags "-static"' \
		$(GO_FILES)

.PHONY: run
run: $(SERVER_BIN)
	@echo "starting server on port 8080..."
	@./$(SERVER_BIN)

.PHONY: clean
clean:
	rm $(SERVER_BIN) || true
