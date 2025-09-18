// Main Application Entry Point
import { Navigation } from './modules/navigation.js';
import { Animations } from './modules/animations.js';
import { Skills } from './modules/skills.js';
import { Projects } from './modules/projects.js';

class Portfolio {
    constructor() {
        this.init();
    }

    init() {
        
        document.addEventListener('DOMContentLoaded', () => {
            new Navigation();
            new Animations();
            new Skills();
            new Projects();
        });
    }
}


new Portfolio();