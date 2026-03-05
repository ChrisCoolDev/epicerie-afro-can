import { NextRequest, NextResponse } from "next/server";
import prisma from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id?: string }> } // params est une promesse
) {
  try {
    const { id } = await context.params; // 🔹 On attend la promesse ici

    if (!id) {
      return NextResponse.json({ error: "ID manquant" }, { status: 400 });
    }

    const productId = parseInt(id, 10);

    if (isNaN(productId)) {
      return NextResponse.json({ error: "ID invalide" }, { status: 400 });
    }

    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return NextResponse.json({ error: "Produit non trouvé" }, { status: 404 });
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
