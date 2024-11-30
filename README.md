# Ben's 3D Printing Hub

A modern web application for 3D printing enthusiasts featuring tutorials, resources, a shop, and a community platform.

## Admin Access

### Logging In

1. Navigate to `/login`
2. Use your admin credentials to log in
3. Once logged in, access the admin panel at `/admin`

### Admin Panel Features

#### Page Builder (`/admin/pages`)
- Create and edit dynamic pages
- Drag-and-drop interface for page layout
- Add/edit content blocks (text, images, etc.)
- Preview changes before publishing

#### Media Library (`/admin/media`)
- Upload and manage images
- Organize media into collections
- Copy image URLs for use in content
- Delete unused media

### Content Management

#### Blog Posts
1. Navigate to `/admin/pages`
2. Select "Blog" from the content types
3. Click "New Post" to create content
4. Fill in:
   - Title
   - Content (Markdown supported)
   - Featured image
   - Category
   - Publication date

#### Tutorials
1. Navigate to `/admin/pages`
2. Select "Tutorials" section
3. Add new tutorials with:
   - Title
   - Difficulty level
   - Duration
   - Step-by-step instructions
   - Images and videos
   - Requirements list

#### Resources
1. Access the Resources section
2. Add/edit resource categories
3. Update links and descriptions
4. Set access levels (free/member)

## E-commerce Setup

### Stripe Integration

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Stripe Dashboard
3. Add keys to your environment variables:
   ```
   STRIPE_PUBLIC_KEY=your_public_key
   STRIPE_SECRET_KEY=your_secret_key
   ```

### Product Management

1. Add products in the Stripe Dashboard
2. Configure:
   - Product name
   - Description
   - Price
   - Images
   - Inventory tracking
   - Shipping options

### Shopping Cart

The shopping cart is implemented using Stripe Checkout:
1. Products are synced from Stripe
2. Cart state is managed client-side
3. Checkout process:
   - Add items to cart
   - Review cart
   - Proceed to Stripe Checkout
   - Complete payment
   - Order confirmation

## Deployment

### Environment Variables

Required environment variables:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### Database Setup

1. Create a Supabase project
2. Run the following tables:
   - users
   - profiles
   - products
   - orders
   - blog_posts
   - tutorials
   - resources

### Deployment Steps

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to your hosting provider
3. Set environment variables
4. Configure domain and SSL

## Development

### Local Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file with required variables
4. Start development server:
   ```bash
   npm run dev
   ```

### Testing

Run tests:
```bash
npm run test
```

## Support

For technical support or questions:
1. Check the documentation
2. Contact the development team
3. Submit issues through the project management system

## Security

- Regular security updates
- Data encryption
- Secure authentication
- Payment processing through Stripe
- Regular backups