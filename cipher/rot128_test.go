package cipher

import (
	"bytes"
	"testing"

	r "github.com/stretchr/testify/require"
)

var (
	TestBuffer        = []byte{128, 129, 130}
	ReverseTestBuffer = []byte{0, 1, 2}
)

func TestRot128Reader_Read(t *testing.T) {
	reader, err := NewRot128Reader(bytes.NewBuffer(TestBuffer))
	r.NoError(t, err)
	r.NotNil(t, reader)

	buf := make([]byte, 3, 3)
	n, err := reader.Read(buf)
	r.NoError(t, err)
	r.Equal(t, 3, n)
	r.Equal(t, ReverseTestBuffer, buf)
}

func TestRot128Reader_Reversible(t *testing.T) {
	reader, err := NewRot128Reader(bytes.NewBuffer(TestBuffer))
	r.NoError(t, err)
	r.NotNil(t, reader)

	reader, err = NewRot128Reader(reader)
	r.NoError(t, err)
	r.NotNil(t, reader)

	buf := make([]byte, 3, 3)
	n, err := reader.Read(buf)
	r.NoError(t, err)
	r.Equal(t, 3, n)
	r.Equal(t, TestBuffer, buf)
}

func TestRot128Writer_Write(t *testing.T) {
	buf := &bytes.Buffer{}
	writer, err := NewRot128Writer(buf)
	r.NoError(t, err)
	r.NotNil(t, writer)

	n, err := writer.Write(TestBuffer)
	r.NoError(t, err)
	r.Equal(t, 3, n)
	r.Equal(t, ReverseTestBuffer, buf.Bytes())
}

func TestRot128Writer_Reversible(t *testing.T) {
	buf := &bytes.Buffer{}
	writer, err := NewRot128Writer(buf)
	r.NoError(t, err)
	r.NotNil(t, writer)

	writer, err = NewRot128Writer(writer)
	r.NoError(t, err)
	r.NotNil(t, writer)

	n, err := writer.Write(TestBuffer)
	r.NoError(t, err)
	r.Equal(t, 3, n)
	r.Equal(t, TestBuffer, buf.Bytes())
}
