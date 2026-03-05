import prisma from '@/lib/prisma';

export async function GET() {
    try {
        const products = await prisma.product.findMany();
        return new Response(JSON.stringify(products), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch products' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}