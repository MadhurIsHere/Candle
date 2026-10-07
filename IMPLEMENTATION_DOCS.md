# Lumière Candle Co. — Full-Stack Implementation Docs

> **Tech Stack**: Next.js 16 (App Router) + Spring Boot 3 (REST API)
> **Brand**: Lumière Candle Co. — luxury hand-poured soy wax candles
> **Status**: Frontend homepage complete · Backend spec ready to implement

---

## Project Structure

```
candel/                            ← Next.js frontend
├── src/app/
│   ├── layout.tsx                 ← Root layout + SEO metadata
│   ├── page.tsx                   ← Homepage assembly
│   ├── globals.css                ← Design system + all styles
│   └── components/
│       ├── MarqueeBanner.tsx      ← Scrolling promo banner
│       ├── Navbar.tsx             ← Sticky nav with dropdowns
│       ├── ProductStrip.tsx       ← Circular product thumbnails
│       ├── HeroSection.tsx        ← Split-screen hero
│       ├── YouMightLike.tsx       ← Product grid (4 cards)
│       ├── Footer.tsx             ← Full footer + newsletter
│       └── ScrollToTop.tsx        ← Floating scroll-to-top
├── public/
│   ├── candle_hero.jpg
│   ├── candle_collection.jpg
│   ├── candle_aurora.jpg
│   ├── candle_flora.jpg
│   ├── candle_silva.jpg
│   └── candle_nox.jpg
└── next.config.ts

candel-api/                        ← Spring Boot backend (to scaffold)
└── src/main/java/com/lumiere/
    ├── LumiereApplication.java
    ├── config/CorsConfig.java
    ├── config/SecurityConfig.java
    ├── product/Product.java
    ├── product/ProductController.java
    ├── order/Order.java
    ├── order/OrderController.java
    └── newsletter/NewsletterController.java
```

---

## Frontend — Next.js 16

### Design System Tokens (globals.css)

| CSS Variable    | Value       | Usage                   |
|-----------------|-------------|-------------------------|
| --cream         | #f7f3ee     | Section backgrounds     |
| --warm-white    | #fdfaf6     | Page background         |
| --charcoal      | #1a1a1a     | Text, dark buttons      |
| --dark-brown    | #2c1810     | Serif headings          |
| --gold          | #b8922a     | Accent, CTA hover       |
| --gold-light    | #d4a843     | Hover states            |
| --border        | #e8e0d6     | Borders, dividers       |

**Fonts**: `Cormorant Garamond` (display) + `Inter` (body) via Google Fonts

---

### Component Details

#### MarqueeBanner
- Infinite CSS `@keyframes marquee` animation (28s)
- Pauses on hover via `animation-play-state: paused`
- Array doubled for seamless loop

#### Navbar
- Sticky + glassmorphism (`backdrop-filter: blur(12px)`)
- Two rows: top (socials + logo + cart/wishlist) and bottom (nav links)
- Collections dropdown: 9 scents + 2 image previews
- Policy dropdown: Privacy + Return policy
- Badge counts on wishlist and cart icons

#### ProductStrip
- Horizontal scroll, hidden scrollbar (`scrollbar-width: none`)
- Circular 80px thumbnail frames with gold ring on hover

#### HeroSection
- CSS Grid `1fr 1fr` split layout
- Pulsing gold badge pill, Cormorant Garamond 72px heading
- "Shop Now" + "View Collection" CTA buttons
- Floating "New Drop" card overlay on hero image
- Slide dots (CSS only — animated carousel to be added)

#### YouMightLike
- Responsive CSS Grid: 4 → 2 columns on mobile
- Cards: `translateY(-6px)` lift on hover + shadow
- Wishlist button revealed on hover with smooth transition
- Add-to-cart button rotates 90deg on hover

#### Footer
- 4-column grid: brand + newsletter | quick links + policy | collections | image previews
- Newsletter input with gold subscribe button
- Social links: Instagram, WhatsApp, Pinterest
- Payment badges: UPI, Visa, MC, RazorPay
- Bottom bar: copyright + legal links + payment icons

#### ScrollToTop
- Appears after 300px scroll (`useEffect` listener)
- Smooth scroll via `window.scrollTo({ behavior: 'smooth' })`

---

## Backend — Spring Boot 3

### Tech Choices

| Layer      | Technology                     |
|------------|--------------------------------|
| Framework  | Spring Boot 3.x                |
| Language   | Java 21                        |
| ORM        | Spring Data JPA + Hibernate    |
| Database   | PostgreSQL (prod) / H2 (dev)   |
| Security   | Spring Security + JWT          |
| Build      | Maven                          |
| API Docs   | SpringDoc OpenAPI (Swagger UI) |
| Payments   | Razorpay Java SDK              |

---

### application.yml

```yaml
spring:
  application:
    name: lumiere-api
  datasource:
    url: jdbc:postgresql://localhost:5432/lumiere
    username: ${DB_USER:postgres}
    password: ${DB_PASS:secret}
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: false

server:
  port: 8080

lumiere:
  cors:
    allowed-origins:
      - http://localhost:3000
  jwt:
    secret: ${JWT_SECRET:change-me}
    expiry-ms: 86400000
  razorpay:
    key-id: ${RAZORPAY_KEY}
    key-secret: ${RAZORPAY_SECRET}
```

---

### Product Entity

```java
@Entity @Table(name = "products")
public class Product {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;        // "Aurora No.1"
    private String slug;        // "aurora-no-1"
    private String scent;       // "Sandalwood & Amber"
    private String description;
    private BigDecimal price;
    private Integer stockQty;
    private String imageUrl;
    private String tag;         // "Best Seller" | "New" | "Limited" | null
    @Enumerated(EnumType.STRING)
    private CollectionName collection;
    private boolean active = true;
    @CreationTimestamp private LocalDateTime createdAt;
    @UpdateTimestamp   private LocalDateTime updatedAt;
}
```

### Order Entity

```java
@Entity @Table(name = "orders")
public class Order {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String razorpayOrderId;
    private String customerEmail;
    private String customerPhone;
    private String shippingAddress;
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<OrderItem> items;
    private BigDecimal total;
    @Enumerated(EnumType.STRING)
    private OrderStatus status; // PENDING | PAID | SHIPPED | DELIVERED | CANCELLED
    @CreationTimestamp private LocalDateTime createdAt;
}
```

---

### REST API Endpoints

#### Products
```
GET  /api/products                    → Paginated list
GET  /api/products/{slug}             → Single product
GET  /api/products/collection/{name}  → By collection
GET  /api/products/featured           → Top 8 featured

POST   /api/admin/products            → Create (Admin)
PUT    /api/admin/products/{id}       → Update (Admin)
DELETE /api/admin/products/{id}       → Soft-delete (Admin)
```

#### Orders
```
POST  /api/orders/create              → Create Razorpay order
POST  /api/orders/verify              → Verify payment signature
GET   /api/orders/{id}                → Get order (authenticated)

GET   /api/admin/orders               → All orders (Admin)
PATCH /api/admin/orders/{id}/status   → Update status (Admin)
```

#### Newsletter
```
POST   /api/newsletter/subscribe      → Add email subscriber
DELETE /api/newsletter/unsubscribe    → Remove by token
```

---

### ProductController Example

```java
@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public Page<ProductDTO> listProducts(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "12") int size,
            @RequestParam(required = false) String collection
    ) {
        Pageable pageable = PageRequest.of(page, size,
            Sort.by("createdAt").descending());
        return collection != null
            ? productService.findByCollection(collection, pageable)
            : productService.findAllActive(pageable);
    }

    @GetMapping("/{slug}")
    public ResponseEntity<ProductDTO> getProduct(@PathVariable String slug) {
        return productService.findBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/featured")
    public List<ProductDTO> getFeatured() {
        return productService.findFeatured(8);
    }
}
```

### CORS Configuration

```java
@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Value("${lumiere.cors.allowed-origins}")
    private List<String> allowedOrigins;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins(allowedOrigins.toArray(String[]::new))
                .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true)
                .maxAge(3600);
    }
}
```

---

### Razorpay Payment Flow

```
1. User → "Buy Now"
2. Frontend POST /api/orders/create { items, shipping }
3. Backend creates Razorpay order → { orderId, amount, currency }
4. Frontend opens Razorpay Checkout modal
5. User pays
6. Frontend POST /api/orders/verify { orderId, paymentId, signature }
7. Backend verifies HMAC-SHA256 signature
8. Order marked PAID → confirmation email sent
```

---

## Frontend ↔ Backend Integration

### API Client — `src/lib/api.ts`

```typescript
const BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export async function fetchFeaturedProducts() {
  const res = await fetch(`${BASE}/api/products/featured`, {
    next: { revalidate: 60 }, // Next.js ISR
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function createOrder(payload: OrderPayload) {
  const res = await fetch(`${BASE}/api/orders/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}
```

### `.env.local`

```bash
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxxxxxxx
```

---

## Running Locally

```bash
# Frontend
cd candel && npm run dev
# → http://localhost:3000

# Backend
cd candel-api && mvn spring-boot:run
# → http://localhost:8080
# → Swagger: http://localhost:8080/swagger-ui.html
```

---

## Pages Roadmap

| Page            | Route                        | Status      |
|-----------------|------------------------------|-------------|
| Homepage        | /                            | Done        |
| Collections     | /collections                 | Next        |
| Product Detail  | /collections/[slug]          | Next        |
| Cart            | /cart                        | Next        |
| Checkout        | /checkout                    | Next        |
| Order Confirm   | /order/[id]                  | Next        |
| About Us        | /about                       | Next        |
| Contact         | /contact                     | Next        |
| Privacy Policy  | /policy/privacy-policy       | Next        |
| Return Policy   | /policy/return-refund-policy | Next        |
| Loading Anim.   | —                            | Later       |
