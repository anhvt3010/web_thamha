const products = [
    { name: 'Đèn Ốp Quạt Trần Ø1000mm MC-KD1364' },
    { name: 'Đèn Ốp Trần LED Hiện Đại L1090mm YN-1601-5' },
    { name: 'Tuấn Anh' },
    { name: 'aaAAAAA' },
    // Add more product data as needed
];

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const productSuggestions = document.getElementById('productSuggestions');
    const productList = document.getElementById('productList');

    if (searchInput) {
        // Thêm sự kiện input cho ô tìm kiếm
        searchInput.addEventListener('input', function () {
            const inputValue = searchInput.value.toLowerCase();
            const filteredProducts = products.filter(product => product.name.toLowerCase().includes(inputValue));

            // Xóa tất cả các options hiện có trong datalist
            productSuggestions.innerHTML = '';

            if (filteredProducts.length > 0) {
                // Thêm các options mới vào datalist
                filteredProducts.forEach(product => {
                    const suggestionOption = document.createElement('option');
                    suggestionOption.value = product.name;
                    productSuggestions.appendChild(suggestionOption);
                });

                // Hiển thị danh sách gợi ý
                productList.innerHTML = ''; // Xóa nội dung hiện tại trong productList
                productList.style.display = 'block';
            } else {
                // Ẩn danh sách gợi ý nếu không có sản phẩm nào phù hợp
                productList.style.display = 'none';
            }
        });

        // Thêm sự kiện click cho ô tìm kiếm để tự động điền khi người dùng chọn đề xuất
        searchInput.addEventListener('click', function () {
            if (searchInput.value.trim() !== '') {
                productList.style.display = 'none';
            }
        });
    }
});

// document.getElementById('searchForm').addEventListener('submit', function (event) {
//     event.preventDefault();
//     // You can add additional handling here, such as navigating to a search results page
// });

// // Handle selection from the dropdown
// productDropdown.addEventListener('change', function () {
//     searchInput.value = productDropdown.value;
//     productDropdown.style.display = 'none';
// });