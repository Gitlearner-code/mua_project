// Project tabs functionality
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        
        // Hide all projects
        document.querySelectorAll('.project-detail').forEach(project => {
            project.classList.add('hidden');
        });
        
        // Show selected project
        document.getElementById(`project-${projectId}`).classList.remove('hidden');
        
        // Update active tab
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
    });
});
