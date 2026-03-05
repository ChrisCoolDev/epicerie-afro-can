"use client"
import { useState, useEffect } from "react";
import ReviewForm from "./basics/ReviewForm";
import ReviewCard from "./ReviewCard";

export default function ClientsReview() {
    const [reviews, setReviews] = useState<{ id: string; name: string; message: string; createdAt: string; replies: { id: string; name: string; message: string; createdAt: string }[] }[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchReviews = async () => {
        try {
            const response = await fetch('/api/reviews');
            
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des reviews');
            }
            
            const data = await response.json();
            setReviews(data);
        } catch (err) {
            console.error('Erreur:', err);
            setError('Impossible de charger les avis. Veuillez réessayer plus tard.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    /*const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };*/

    return (
        <section className="px-4">
            <div className="max-w-[1298px] w-full mx-auto flex flex-col md:flex-row items-start justify-between mt-[90px] max-sm:mt-[40px] pt-[30px] gap-8">
                <div className="max-w-[619px] w-full space-y-[40px]">
                    <h2 className="text-[42px] max-sm:text-[28px] font-bold text-[#3D4C5E] leading-[110%] tracking-[-3%] max-w-[448px]">
                        Avis clients sur le magasin
                    </h2>
                    <div className="space-y-[30px]">
                        {loading ? (
                            <p>Chargement des avis...</p>
                        ) : error ? (
                            <p className="text-red-500">{error}</p>
                        ) : reviews.length === 0 ? (
                            <p>Aucun avis pour le moment. Soyez le premier à donner votre avis !</p>
                        ) : (
                            reviews.map((review) => (
                                <ReviewCard 
                                    key={review.id}
                                    name={review.name} 
                                    message={review.message}
                                    replies={review.replies}
                                />
                            ))
                        )}
                    </div>
                </div>
                <div className="max-w-[619px] w-full md:mt-[120px]">
                    <ReviewForm onReviewSubmitted={() => fetchReviews()} />
                </div>
            </div>
        </section>
    );
}