![Uploading Notification.png…]()
<img width="960" height="417" alt="Billing" src="https://github.com/user-attachments/assets/43e6e3fd-46c3-4666-a300-77e217973a66" />
<img width="960" height="418" alt="Analytics" src="https://github.com/user-attachments/assets/8f9da1d3-4388-45e3-90a7-b5f818e5bc00" />
# 🚀 Nexora Cloud – Production-Ready Multi-Tenant SaaS Dashboard

A modern enterprise-grade **Multi-Tenant SaaS Dashboard** built with **Next.js 15**, **TypeScript**, **MongoDB**, **Tailwind CSS**, **Stripe**, and **RBAC**.

Designed to simulate a production SaaS application with authentication, tenant workspaces, analytics, billing, team management, notifications, projects, and role-based access control.

---

## 🔗 Live Demo

🌐 Live Application

https://vercel.com/pragati-mishra-s-projects/saa-s-dashboard
💻 GitHub Repository

https://github.com/Pragati-coders/saas-dashboard

---

## 📋 Table of Contents

- Overview
- Screenshots
- Tech Stack
- Features
- Architecture
- Folder Structure
- Getting Started
- Environment Variables
- Production Notes
- Future Improvements
- Contributing

---

# 🌟 Overview

**Nexora Cloud** is a production-ready SaaS dashboard inspired by modern platforms like **Vercel**, **Linear**, **Clerk**, **Supabase**, and **Stripe Dashboard**.

It demonstrates how commercial SaaS products are structured with:

- Multi-tenant workspaces
- Secure authentication
- Role-based access control
- Team collaboration
- Analytics dashboards
- Billing & subscriptions
- Notifications
- Project management
- Responsive UI
- Enterprise-ready architecture

The project follows scalable folder organization, reusable UI components, protected routes, and clean production practices.

---

# 📸 Screenshots

## 🏠 Dashboard

![Dashboard] <img width="960" height="410" alt="Dashboard - Saas" src="https://github.com/user-attachments/assets/1fa30de9-935e-4840-adc8-7d4ede7ca5d9" />

Modern SaaS dashboard with KPI cards, revenue analytics, subscriptions, notifications, and responsive sidebar navigation.

---

## 📈 Analytics

![Analytics](./screenshots/analytics.png)

Interactive analytics dashboard featuring revenue trends, monthly growth, subscription metrics, and export functionality.

---

## 👥 Team Management

![Team](./screenshots/team.png)

Manage workspace members, invite users, assign roles, search team members, and maintain tenant-scoped permissions.

---

## 💳 Billing

![Billing](./screenshots/billing.png)

Subscription management with Free, Pro, and Enterprise plans, billing history, invoices, and Stripe customer portal integration.

---

## 🔔 Notifications

![Notifications](./screenshots/notifications.png)

Centralized notification center displaying billing updates, invitations, project activities, and system alerts.

---

# 🛠 Tech Stack

| Category | Technology |
|-----------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Authentication | Auth.js / NextAuth |
| Database | MongoDB |
| ODM | Mongoose |
| Forms | React Hook Form |
| Validation | Zod |
| Charts | Recharts |
| Payments | Stripe |
| State Management | Zustand Ready |
| Animations | Framer Motion |
| Deployment | Vercel |

---

# ✨ Features

## 🏢 Multi-Tenant Architecture

- Tenant-based workspaces
- Workspace slug routing
- Tenant-scoped project filtering
- Organization management
- Secure tenant isolation

---

## 🔐 Authentication

- Login
- Registration
- Forgot Password
- Reset Password
- Protected routes
- Session management

---

## 👤 Role-Based Access Control

Five user roles:

- Owner
- Admin
- Manager
- Member
- Viewer

Permissions are enforced across dashboard modules.

---

## 📊 Dashboard

- Revenue overview
- KPI cards
- Active subscriptions
- Notifications
- Pending tasks
- Recent activity

---

## 📈 Analytics

- Revenue over time
- Monthly growth
- Active users
- Subscription analytics
- Export reports

---

## 📂 Project Management

- Project search
- Status tracking
- Progress indicators
- Owner assignment
- Archive support
- Tenant-scoped filtering

---

## 👥 Team Management

- Invite members
- Change roles
- Remove members
- Search users
- Invitation status
- Pagination-ready structure

---

## 💳 Billing

- Free Plan
- Pro Plan
- Enterprise Plan
- Billing history
- Invoice downloads
- Stripe Customer Portal
- Webhook integration

---

## 🔔 Notifications

- Billing updates
- Workspace invitations
- Project events
- System alerts
- Mark as read

---

## ⚙️ Settings

- Profile management
- Organization settings
- Workspace preferences
- Security settings

---

## 🛡 Production Ready

- Protected routes
- Server Actions
- RBAC authorization
- Zod validation
- Scalable architecture
- Deployment ready

---

# 🏗️ Architecture

```text
                 User
                   │
                   ▼
          Next.js Frontend
                   │
        ┌──────────┴──────────┐
        ▼                     ▼
 Authentication         Dashboard UI
(Auth.js/NextAuth)           │
        │                    ▼
        │             Server Actions
        │                    │
        ▼                    ▼
     MongoDB            Tenant Services
        │                    │
        └──────────┬─────────┘
                   ▼
              Stripe Billing
```

---

# 📁 Folder Structure

```text
app/
│
├── (auth)/
├── (dashboard)/
├── api/
│
components/
│
├── auth/
├── dashboard/
├── marketing/
├── providers/
└── ui/
│
actions/
lib/
models/
services/
types/
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/Pragati-coders/saas-dashboard.git

cd saas-dashboard
```

---

## Install Dependencies

```bash
npm install
```

---

## Create Environment File

```bash
cp .env.example .env.local
```

---

## Run Development Server

```bash
npm run dev
```

Visit:

```text
http://localhost:3000
```

---

## Demo Login

```text
Email:
pragati@example.com

Password:
password123
```

---

# 🔑 Environment Variables

```env
NEXTAUTH_URL=http://localhost:3000

NEXTAUTH_SECRET=

MONGODB_URI=

STRIPE_SECRET_KEY=

STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

# 🚀 Production Notes

Before deployment:

- Connect MongoDB Atlas
- Configure Stripe API keys
- Add Stripe Webhook
- Replace demo data
- Configure Auth secrets
- Add Vercel Environment Variables
- Enable production database indexes

---

# 🚀 Build

```bash
npm run build

npm run start
```

---

# 🌱 Future Improvements

- Real MongoDB CRUD
- Stripe Checkout
- Email invitations
- Password reset emails
- Audit exports
- Feature flags
- SAML SSO
- Playwright testing
- Vitest unit tests
- Real-time notifications
- Activity feeds
- AI workspace insights

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Add new feature"
```

4. Push branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# ⭐ Support

If you found this project helpful, please consider giving it a **Star ⭐** on GitHub.

It helps others discover the project and motivates future development.

---

# 👩‍💻 Author

**Pragati Mishra**

### GitHub

https://github.com/Pragati-coders

---
