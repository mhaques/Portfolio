document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form[name="contact"]');
    const inputs = form.querySelectorAll('input, textarea');
    
    // Validation patterns
    const patterns = {
        name: /^[a-zA-Z\s]{2,30}$/,
        email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        subject: /^.{2,50}$/,
        message: /^[\s\S]{10,500}$/
    };

    // Error messages
    const errorMessages = {
        name: 'Name must be 2-30 characters long, letters only',
        email: 'Please enter a valid email address',
        subject: 'Subject must be 2-50 characters long',
        message: 'Message must be 10-500 characters long'
    };

    // Real-time validation
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            validateField(input);
        });
    });

    // Validate individual field
    function validateField(field) {
        const pattern = patterns[field.name];
        const isValid = pattern.test(field.value);
        
        if (!isValid) {
            field.classList.add('border-red-500', 'shake');
            field.classList.remove('border-gray-700', 'border-gray-300', 'focus:ring-blue-500');
            
            // Add error message
            let errorDiv = field.nextElementSibling;
            if (!errorDiv || !errorDiv.classList.contains('error-message')) {
                errorDiv = document.createElement('div');
                errorDiv.className = 'error-message text-red-500 text-sm mt-1';
                field.parentNode.insertBefore(errorDiv, field.nextSibling);
            }
            errorDiv.textContent = errorMessages[field.name];
            
            // Remove shake animation after it completes
            setTimeout(() => {
                field.classList.remove('shake');
            }, 500);
        } else {
            field.classList.remove('border-red-500', 'shake');
            field.classList.add('border-green-500', 'success-glow');
            
            // Remove error message if it exists
            const errorDiv = field.nextElementSibling;
            if (errorDiv && errorDiv.classList.contains('error-message')) {
                errorDiv.remove();
            }
        }
    }

    // Form validation before Netlify submission
    form.addEventListener('submit', (e) => {
        let isValid = true;

        // Validate all fields
        inputs.forEach(input => {
            if (!patterns[input.name].test(input.value)) {
                isValid = false;
                validateField(input);
            }
        });

        if (!isValid) {
            e.preventDefault();
        }
    });
});