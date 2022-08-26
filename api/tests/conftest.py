from multiprocessing import Process

import pytest
import uvicorn

from src.api import app, router


def run_server():

    app.include_router(router)

    uvicorn.run(app)


@pytest.fixture(scope="module")
def server():
    proc = Process(target=run_server, args=(), daemon=True)
    proc.start()
    yield proc
    proc.kill()
