import './ResultsPanel.css'

export default function ResultsPanel({ results }) {
  return (
    <section className="results-section">
      <h2>Analysis Results</h2>

      <div className="results-grid">
        {/* Logical Fallacies */}
        <div className="result-card fallacies-card">
          <div className="card-header">
            <h3>🚫 Logical Fallacies Detected</h3>
            <span className="fallacy-count">{results.fallacies.length}</span>
          </div>
          {results.fallacies.length > 0 ? (
            <ul className="fallacy-list">
              {results.fallacies.map((fallacy, idx) => (
                <li key={idx} className="fallacy-item">
                  <strong>{fallacy.name}</strong>
                  <p>{fallacy.description}</p>
                  <small className="severity" data-severity={fallacy.severity}>
                    Severity: {fallacy.severity}
                  </small>
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-issues">✓ No major logical fallacies detected</p>
          )}
        </div>

        {/* Evidence Analysis */}
        <div className="result-card evidence-card">
          <div className="card-header">
            <h3>📊 Evidence Assessment</h3>
          </div>
          <div className="evidence-items">
            <div className="evidence-item">
              <span className="label">Evidence Provided:</span>
              <span className={`value ${results.evidenceCount > 0 ? 'positive' : 'negative'}`}>
                {results.evidenceCount > 0 ? `${results.evidenceCount} claim(s)` : 'None'}
              </span>
            </div>
            <div className="evidence-item">
              <span className="label">Evidence Quality:</span>
              <span className={`value ${results.evidenceQuality}`}>
                {results.evidenceQuality}
              </span>
            </div>
            <div className="evidence-item">
              <span className="label">Strength Score:</span>
              <div className="strength-bar">
                <div
                  className="strength-fill"
                  style={{ width: `${results.strengthScore}%` }}
                ></div>
              </div>
              <span className="score-text">{results.strengthScore}%</span>
            </div>
          </div>
        </div>

        {/* Missing Counter-Arguments */}
        <div className="result-card counter-card">
          <div className="card-header">
            <h3>⚔️ Potential Counter-Arguments</h3>
          </div>
          {results.counterArguments.length > 0 ? (
            <ul className="counter-list">
              {results.counterArguments.map((counter, idx) => (
                <li key={idx} className="counter-item">
                  <p>{counter}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-issues">Well-rounded argument with few obvious counters</p>
          )}
        </div>

        {/* Assumptions */}
        <div className="result-card assumptions-card">
          <div className="card-header">
            <h3>🔍 Underlying Assumptions</h3>
          </div>
          {results.assumptions.length > 0 ? (
            <ul className="assumption-list">
              {results.assumptions.map((assumption, idx) => (
                <li key={idx} className="assumption-item">
                  <p>{assumption}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-issues">Few hidden assumptions</p>
          )}
        </div>

        {/* Recommendations */}
        <div className="result-card recommendations-card">
          <div className="card-header">
            <h3>💡 Recommendations</h3>
          </div>
          <ul className="recommendation-list">
            {results.recommendations.map((rec, idx) => (
              <li key={idx} className="recommendation-item">
                <p>{rec}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Overall Assessment */}
        <div className="result-card assessment-card">
          <div className="card-header">
            <h3>📈 Overall Assessment</h3>
          </div>
          <div className="assessment-content">
            <p className="assessment-score">
              <strong>Argument Strength:</strong> <span className={`badge ${results.overallScore.toLowerCase()}`}>{results.overallScore}</span>
            </p>
            <p className="assessment-text">{results.assessmentText}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
