"""pact test for user service client"""
import pytest

from pact import Verifier


PROVIDER_HOST = "127.0.0.1"
PROVIDER_PORT = 8000
PROVIDER_URL = f"http://{PROVIDER_HOST}:{PROVIDER_PORT}"


def test_user_service_provider_against_pact(server):
    verifier = Verifier(provider="Animal API", provider_base_url=PROVIDER_URL)

    output, _ = verifier.verify_pacts(
        "../pact/Web App-Animal API.json",
        verbose=False,
    )

    assert output == 0
