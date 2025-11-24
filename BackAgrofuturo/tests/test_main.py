from fastapi.testclient import TestClient
from app.main import app
import pytest

client = TestClient(app)

def test_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Bienvenido a la API de Agrofuturo"}

def test_sort_quick():
    response = client.post("/api/v1/sort", json={"data": [3, 1, 4, 1, 5, 9], "algorithm": "quick"})
    assert response.status_code == 200
    assert response.json()["sorted_data"] == [1, 1, 3, 4, 5, 9]

def test_search_binary():
    response = client.post("/api/v1/search", json={"data": [1, 3, 5, 7, 9], "target": 5})
    assert response.status_code == 200
    assert response.json()["found"] is True
    assert response.json()["index"] == 2

def test_dijkstra():
    graph_data = {
        "nodes": ["A", "B", "C"],
        "edges": {
            "A": {"B": 1.0, "C": 4.0},
            "B": {"C": 2.0},
            "C": {}
        }
    }
    response = client.post("/api/v1/graph/dijkstra", json={"graph": graph_data, "start_node": "A"})
    assert response.status_code == 200
    distances = response.json()["distances"]
    assert distances["A"] == 0.0
    assert distances["B"] == 1.0
    assert distances["C"] == 3.0

def test_bellman_ford(): #test bellman_ford
    graph_data = {
        "nodes": ["A", "B", "C", "D"],
        "edges": {
            "A": {"B": 5, "C": 8},
            "B": {"C": 3, "D": 4},
            "C": {"D": 2},
            "D": {}
        }
    }
    response = client.post("/api/v1/graph/bellman-ford", json={
        "graph": graph_data, 
        "start_node": "A"
    })
    assert response.status_code == 200
    distances = response.json()["distances"]
    assert distances["A"] == 0
    assert distances["B"] == 5
    assert distances["C"] == 8
    assert distances["D"] == 9
    assert response.json()["has_negative_cycle"] is False

def test_clustering():
    data = [[1.0, 1.0], [1.5, 1.5], [10.0, 10.0], [10.5, 10.5]]
    response = client.post("/api/v1/clustering", json={"data": data, "n_clusters": 2})
    assert response.status_code == 200
    assert len(response.json()["labels"]) == 4
    assert len(response.json()["centers"]) == 2

def test_processing():
    response = client.post("/api/v1/process", json={"data": [1, 2, 3], "operation": "square"})
    assert response.status_code == 200
    assert response.json()["results"] == [1, 4, 9]
