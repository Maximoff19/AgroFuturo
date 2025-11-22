from fastapi import FastAPI
from app.api import routes

app = FastAPI(
    title="Backend de Agrofuturo",
    description="API Backend para el análisis de datos agrícolas de Agrofuturo",
    version="1.0.0"
)

app.include_router(routes.router, prefix="/api/v1")

@app.get("/")
async def root():
    return {"message": "Bienvenido a la API de Agrofuturo"}
