import sys
from multiprocessing import Process

import pytest

from pact_provider import run_server

sys.path.append('tests')
sys.path.append('src')

# pytest_plugins = [
#     "sharedfixtures",
# ]


@pytest.fixture(scope="module")
def server():
    proc = Process(target=run_server, args=(), daemon=True)
    proc.start()
    yield proc
    proc.kill()
