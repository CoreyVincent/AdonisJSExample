# Steps to reproduce

## Actual behavior

1. Run project
2. Send a request to `http://localhost:8080/` with the following body:
```json
{
  "fullName": "",
}
```
3. the response, the `payload` field is empty:
```json
{
  "payload": {}
}
```


## Expected behavior

The `payload` field should contain the `fullName` field

For example the following request:
```json
{
  "fullName": "John Doe",
}
```
returns the following response:
```json
{
  "payload": {
    "fullName": "John Doe"
  }
}
```

So the `fullName` field should be present in the response even if it is empty
```json
{
  "payload": {
    "fullName": ""
  }
}
```

otherwise the `fullName` field does not get saved