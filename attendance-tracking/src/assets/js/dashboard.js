 $(document).ready(function () {
            var itemsPerPage = 3; // Number of items per page
            var currentPage = 1; // Current page
            var totalItems = '<%= orders.length %>'; // Total number of items
            var totalPages = Math.ceil(totalItems / itemsPerPage); // Total number of pages
    
            // Function to display items for the current page
            function showPage(page) {
                $('tbody tr').hide(); // Hide all table rows
                var startIndex = (page - 1) * itemsPerPage; // Calculate starting index
                var endIndex = Math.min(startIndex + itemsPerPage, totalItems); // Calculate ending index
                $('tbody tr').slice(startIndex, endIndex).show(); // Show items for the current page
            }
    
            // Function to generate pagination buttons
            function generatePaginationButtons() {
                var paginationHtml = '';
                for (var i = 1; i <= totalPages; i++) {
                    paginationHtml += '<li class="page-item' + (i === currentPage ? ' active' : '') + '"><a class="page-link" href="#" onclick="changePage(' + i + ')">' + i + '</a></li>';
                }
                $('#pagination').html(paginationHtml); // Update pagination buttons
            }
    
            // Function to handle page change
            window.changePage = function (page) {
                currentPage = page; // Update current page
                showPage(currentPage); // Show items for the new page
                generatePaginationButtons(); // Regenerate pagination buttons
            };
    
            showPage(currentPage); // Show items for the initial page
            generatePaginationButtons(); // Generate pagination buttons
        });