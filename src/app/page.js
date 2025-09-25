'use client';

import './links.css';

export default function Home() {
  const links = [
    {
      title: "ARCH: Aggregated naRrative Codified Health",
      appUrl: "https://app.parse-health.org/ARCH/",
      pubUrl: "https://pubmed.ncbi.nlm.nih.gov/37293026/",
      description: "Aggregated naRrative Codified Health"
    },
    {
      title: "KESER: Knowledge Extraction via Sparse Embedding Regression",
      appUrl: "https://shiny.parse-health.org/kesernetwork-linkage/",
      pubUrl: "https://pubmed.ncbi.nlm.nih.gov/34707226/",
      description: "Knowledge Extraction via Sparse Embedding Regression"
    },
    {
      title: "KOMAP: Knowledge-driven Online Multimodal Automated Phenotyping",
      appUrl: "https://shiny.parse-health.org/KOMAP/",
      pubUrl: "https://pubmed.ncbi.nlm.nih.gov/37873131/",
      description: "Knowledge-driven Online Multimodal Automated Phenotyping"
    },
    {
      title: "ONCE: Online Narrative and Codified feature search Engine",
      appUrl: "https://shiny.parse-health.org/ONCE/",
      pubUrl: "https://pubmed.ncbi.nlm.nih.gov/37873131/",
      description: "Online Narrative and Codified feature search Engine"
    },
    {
      title: "SurvMaximin: Robust federated approach to transporting survival risk prediction models",
      appUrl: "https://shiny.parse-health.org/SurvMaximin/",
      pubUrl: "https://pubmed.ncbi.nlm.nih.gov/36007785/",
      description: "Robust federated approach to transporting survival risk prediction models"
    },
    {
      title: "MIKGI: Multiview Incomplete Knowledge Graph Integration",
      appUrl: "https://shiny.parse-health.org/MIKGI/",
      pubUrl: "https://pubmed.ncbi.nlm.nih.gov/35872266/",
      description: "Multiview Incomplete Knowledge Graph Integration"
    },
    {
      title: "PheMEGA",
      appUrl: "https://shiny.parse-health.org/PheMEGA/",
      pubUrl: "https://pubmed.ncbi.nlm.nih.gov/37425708/",
      description: "PheMEGA"
    },
    {
      title: "ICD Hierarchy",
      appUrl: "https://shiny.parse-health.org/phecodemap/",
      description: "ICD Hierarchy"
    },
    {
      title: "LOINC Hierarchy",
      appUrl: "https://shiny.parse-health.org/loinc-hierarchy/",
      description: "LOINC Hierarchy"
    },
    {
      title: "RxNorm Hierarchy",
      appUrl: "https://shiny.parse-health.org/rxnorm-hierarchy/",
      description: "RxNorm Hierarchy"
    },
    {
      title: "PheWAS Heterogeneity",
      appUrl: "https://shiny.parse-health.org/ht-phewas/",
      description: "PheWAS Heterogeneity"
    },
    {
      title: "GeoPheno",
      appUrl: "https://shiny.parse-health.org/geopheno/",
      description: "GeoPheno"
    }
  ];

  return (
    <main className="main-container">
      {/* Navigation Header */}
      <div className="nav-header">
        <div className="nav-links">
          <a 
            href="https://app.parse-health.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link"
          >
            https://app.parse-health.org/
          </a>
          <span className="nav-separator">|</span>
          <a 
            href="#" 
            className="nav-link"
          >
            parse application
          </a>
        </div>
      </div>
      
      <div className="header">
        <h1 className="title">PARSE Applications</h1>
        <p className="subtitle">Interactive Data Analytics and Visualization</p>
      </div>
      <div className="container">
        
        <div className="links-grid">
          {links.map((link, index) => (
            <div key={index} className="link-card">
              <div className="card-header">
                <h3 className="link-title">{link.title}</h3>
              </div>
              
              <div className="card-bottom">
                <a
                  href={link.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button app-link"
                >
                  App
                </a>
                
                {link.pubUrl && (
                  <a
                    href={link.pubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-button pub-link"
                  >
                    Pub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
