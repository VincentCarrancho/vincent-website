from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import ai.route as ai_route

origins = ["*"]
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(ai_route.router)


@app.get("/api/")
def hello_world():
    return {"message": "Connection Successful!"}


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
