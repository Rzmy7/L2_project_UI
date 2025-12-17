import './LatestReviews.css';

const LatestReviews = () => {
  const reviews = [
    {
      id: 1,
      title: 'Exceptional service and beautiful rooms…',
      source: 'Booking',
      sentiment: 'Positive',
      time: '2h ago',
      rating: 5,
    },
    {
      id: 2,
      title: 'Wi-Fi connection was terrible…',
      source: 'TripAdvisor',
      sentiment: 'Negative',
      time: '9h ago',
      rating: 2,
    },
  ];

  return (
    <div className="latest-reviews-card">
      <div className="card-header">
        <h3 className="card-title">Latest Reviews</h3>
        <button className="view-all-btn">View All</button>
      </div>

      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-item">
            <div className="review-stars">
              {'★'.repeat(review.rating)}
              {'☆'.repeat(5 - review.rating)}
            </div>
            <p className="review-text">{review.title}</p>
            <div className="review-meta">
              <span className={`review-badge source`}>{review.source}</span>
              <span className={`review-badge ${review.sentiment.toLowerCase()}`}>
                {review.sentiment}
              </span>
              <span className="review-time">{review.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestReviews;
