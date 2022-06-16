import React from "react";
import { Card } from "./style";
export const Repository = ({ repo }) => (
    <Card
        style={{ cursor: 'pointer' }}
        onClick={() => (window.location.href = repo.html_url)}
    >
        <div style={{ fontSize: '18px', marginBottom: '10px' }}>
            {repo.full_name}
        </div>
        <div style={{ marginBottom: '10px' }}>{repo.description}</div>
        <div>
            <span style={{ marginRight: '20px' }}>
                <i className="fas fa-star" /> {repo.stargazers_count}
            </span>
            <span style={{ marginRight: '20px' }}>
                <i className="fas fa-eye" /> {repo.watchers_count}
            </span>
            <span>
                <i className="fas fa-code-branch" /> {repo.forks}
            </span>
        </div>
    </Card>
)