import './ReviewSources.css';

const ReviewSources = () => {
  const sources = [
    { name: 'Booking', percentage: 42, color: '#3b82f6' },
    { name: 'TripAdvisor', percentage: 28, color: '#8b5cf6' },
    { name: 'Google', percentage: 20, color: '#1f2937' },
    { name: 'Other', percentage: 10, color: '#9ca3af' },
  ];

  return (
    <div className="review-sources-card">
      <div className="card-header">
        <h3 className="card-title">Review Sources</h3>
      </div>

      <div className="sources-content">
        <div className="pie-chart">
          <svg viewBox="0 0 200 200" className="pie-svg">
            {/* Create pie slices - simplified version */}
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="60"
              strokeDasharray="210 314"
              transform="rotate(-90 100 100)"
            />
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="60"
              strokeDasharray="140 384"
              strokeDashoffset="-210"
              transform="rotate(-90 100 100)"
            />
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#1f2937"
              strokeWidth="60"
              strokeDasharray="100 424"
              strokeDashoffset="-350"
              transform="rotate(-90 100 100)"
            />
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="60"
              strokeDasharray="50 474"
              strokeDashoffset="-450"
              transform="rotate(-90 100 100)"
            />
          </svg>
        </div>

        <div className="sources-legend">
          {sources.map((source) => (
            <div key={source.name} className="source-item">
              <span
                className="source-color"
                style={{ backgroundColor: source.color }}
              ></span>
              <span className="source-name">{source.name}</span>
              <span className="source-percentage">{source.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSources;
