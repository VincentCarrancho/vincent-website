from fastapi import APIRouter


router = APIRouter()


@router.get("/api/ai/")
async def ai():
    return {"message": "AI Route"}
