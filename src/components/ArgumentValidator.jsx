import { useState } from 'react'
import { analyzeArgument } from '../utils/argumentAnalyzer'
import ResultsPanel from './ResultsPanel'
import './ArgumentValidator.css'

export default function ArgumentValidator() {
  const [argument, setArgument] = useState('')
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleAnalyze = async () => {
    if (!argument.trim()) return

    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 500))
    const analysis = analyzeArgument(argument)
    setResults(analysis)
    setLoading(false)
  }

  const handleClear = () => {
    setArgument('')
    setResults(null)
  }

  return (
    <main className="validator-container">
      <div className="validator-wrapper">
        <section className="input-section">
          <div className="input-group">
            <label htmlFor="argument-input">Enter your claim or argument:</label>
            <textarea
              id="argument-input"
              value={argument}
              onChange={(e) => setArgument(e.target.value)}
              placeholder="E.g., 'Everyone who exercises regularly lives past 100 because my grandfather exercised daily and lived to 101'"
              className="argument-input"
              rows="5"
            />
          </div>
 
          <div className="button-group">
            <button
              onClick={handleAnalyze}
              disabled={loading || !argument.trim()}
              className="btn btn-primary"
            >
              {loading ? 'Analyzing...' : 'Analyze Argument'}
            </button>
            <button
              onClick={handleClear}
              className="btn btn-secondary"
            >
              Clear
            </button>
          </div>
        </section>

        {results && (
          <ResultsPanel results={results} argument={argument} />
        )}

        {!results && !loading && argument && (
          <section className="empty-state">
            <p>Click "Analyze Argument" to begin the analysis</p>
          </section>
        )}
      </div>

      {/* AdSense placeholder */}
      <aside className="ad-sidebar">
        <div className="ad-placeholder">
          <p>Something new </p>
        </div>
      </aside>
    </main>
  )
}

