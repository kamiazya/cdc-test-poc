import uvicorn

from fastapi import APIRouter
from pydantic import BaseModel

from api import app, router


app.include_router(router)


def run_server():
    uvicorn.run(app)
