from fastapi import FastAPI

app = FastAPI()


@app.get("/api/")
def hello_world():
    return {"message": "Connection Successful!"}
