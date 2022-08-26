import logging

from fastapi import FastAPI, HTTPException, APIRouter
from fastapi.logger import logger

logger.setLevel(logging.DEBUG)
router = APIRouter()
app = FastAPI()


@app.get("/dogs")
def get_dogs():
    return [{ 'dog': 1 }]


@app.get("/cats")
def get_cats():
    return [{ 'cat': 2 }, { 'cat': 3 }]


if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app)
