🛍️ Project Overview – Working of the Application

The FlipKart Admin Panel is a full-stack e-commerce management system that connects both users and administrators in one unified platform.

🧭 User Flow (Frontend)

Landing Page / Home Page:
When a user visits the website, they are presented with a list of all available products fetched from the backend database.

Product Listing:
Each product card displays essential information like name, category, price, and stock availability.
Users can browse through all the products easily.

Wishlist (In Progress):
Users can add items to their wishlist — this feature helps them save products they might want to purchase later.
(Currently under development)

Product Details:
Clicking on any product navigates the user to a detailed view page showing its full description, category, and inventory count.

🧑‍💼 Admin Flow (Backend Dashboard)

Admin Login Page:
There’s a dedicated admin section that allows secure login using admin credentials.
Only verified admins can access the dashboard.

Product Management:
Once logged in, the admin can add, update, or delete products in the inventory.

Add Product: Add new product details such as name, price, category, description, and inventory count.

Edit Product: Update or modify any product’s information (price, name, category, etc.).

Delete Product: Remove products that are no longer available in the store.

Inventory Synchronization:
All admin actions are directly reflected in the MongoDB database.
Changes are dynamically updated on the user-facing site through revalidation and incremental static regeneration.
