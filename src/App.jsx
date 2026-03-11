import React, { useState, useEffect } from 'react';
import ClickSpark from './components/ClickSpark';
import Ribbons from './components/Ribbons/Ribbons';
import './index.css';

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchGitHubProjects() {
      try {
        const response = await fetch('https://api.github.com/users/shantoshdurai/repos?sort=updated&per_page=12');
        if (!response.ok) throw new Error('API Error');

        let data = await response.json();
        data = data.filter(repo => !repo.fork && repo.name !== 'shantoshdurai' && repo.name !== 'shantoshdurai.github.io');

        setRepos(data.slice(0, 6));
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setLoading(false);
      }
    }

    fetchGitHubProjects();
  }, []);

  const customDescriptions = {
    'ClassNow-app': 'A modern flutter application for elegant class and student management.',
    'GhostTalker': 'Advanced natural language processing framework for seamless AI communication.',
    'college-timetable-app': 'A comprehensive Kotlin-based mobile application for managing university schedules.',
    'ai-inventory-demand-forecasting': 'A predictive machine learning model to estimate future product demand and optimize stock.',
    'university-chatbot-langchain': 'An intelligent query resolution bot built using LangChain and LLMs.'
  };

  return (
    <ClickSpark sparkColor='#121212' sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, pointerEvents: 'none' }}>
        <Ribbons 
          colors={['#f9a8d4', '#fde047', '#93c5fd', '#86efac', '#c084fc']} 
          baseThickness={15} 
          offsetFactor={0} 
        />
      </div>
      <div className="container">
      <nav className="brutal-box">
        <div className="nav-logo">Santosh Durai</div>
        <div style={{ fontFamily: '"IBM Plex Mono"', fontWeight: 600 }}>
          STATUS:{' '}
          <span style={{ background: '#fff', border: '2px solid var(--border-color)', padding: '2px 8px' }}>
            ONLINE
          </span>
        </div>
      </nav>

      <section className="hero">
        <h1 className="hero-title">
          AI / ML <br />
          <span className="hero-highlight">Developer</span>
        </h1>
        <div className="hero-subtitle brutal-box">
          Building things that matter. Exploring intelligence.
        </div>
      </section>

      <section id="about">
        <h2 className="section-title">Who Am I</h2>
        <div className="about-grid">
          <div className="brutal-box about-card">
            <p className="about-text">
              For some unknown reason I've been getting an insane interest in <strong>Artificial Intelligence</strong> — fascinated by every new model that comes out and the rapid advancements we've been getting.
            </p>
            <p className="about-text">
              I can't stop wondering, and I can't stop building. My focus is on creating tools that <strong>actually work</strong> in the real world.
            </p>

            <div className="quote-banner">
              "Don't Let Your Curiosity Die."
            </div>

            <div className="tech-wrapper">
              <span className="t-tag">Python</span>
              <span className="t-tag">Dart & Flutter</span>
              <span className="t-tag">Machine Learning</span>
              <span className="t-tag">Gemini API</span>
              <span className="t-tag">JavaScript</span>
              <span className="t-tag">Firebase</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2 className="section-title" style={{ backgroundColor: 'var(--accent-blue)' }}>The Lab</h2>
        <div className="projects-grid">
          {loading && !error && (
            <div className="brutal-box loading-banner">
              FETCHING REPOS FROM GITHUB...
            </div>
          )}

          {error && (
            <div className="brutal-box loading-banner" style={{ animation: 'none', background: 'var(--accent-pink)' }}>
              GITHUB FETCH FAILED. <a href="https://github.com/shantoshdurai" style={{ color: 'inherit' }}>VISIT GITHUB</a>
            </div>
          )}

          {!loading && !error && repos.length === 0 && (
            <div className="brutal-box loading-banner" style={{ animation: 'none', background: 'var(--accent-pink)' }}>
              NO PROJECTS FOUND
            </div>
          )}

          {!loading && !error && repos.map(repo => {
            const repoDesc = repo.description || customDescriptions[repo.name] || 'Raw intelligence stored here. No description provided.';

            return (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-box project-card"
              >
                <div className="project-header">
                  <h3 className="project-title">{repo.name.replace(/-/g, ' ')}</h3>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
                <p className="project-desc">{repoDesc}</p>
                <div className="project-meta">
                  <span style={{ background: 'var(--accent-yellow)', padding: '2px 8px', border: '2px solid var(--border-color)' }}>
                    {repo.language || 'Code'}
                  </span>
                  <span>★ {repo.stargazers_count}</span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="brutal-box footer-card">
        <h2 className="footer-title">Let's Connect</h2>
        <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>Got an idea? Want to build something cool?</p>
        <div className="social-links">
          <a href="mailto:santoshp123steam@gmail.com" className="brutal-btn primary">EMAIL ME</a>
          <a href="https://github.com/shantoshdurai" target="_blank" rel="noopener noreferrer" className="brutal-btn secondary">GITHUB</a>
          <a href="https://www.linkedin.com/in/santoshp123" target="_blank" rel="noopener noreferrer" className="brutal-btn" style={{ background: 'var(--accent-blue)' }}>LINKEDIN</a>
        </div>
      </section>

      <div className="bottom-credit">
        © {new Date().getFullYear()} SANTOSH DURAI // BUILT WITH RAW CURIOSITY
      </div>
    </div>
    </ClickSpark>
  );
}

export default App;
