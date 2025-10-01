# Snapchat Clone Deployment Guide

## Prerequisites
- MongoDB Atlas account and cluster
- GitHub account
- Vercel account
- Render account

## Environment Variables Setup

### MongoDB Atlas Setup
1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create a new cluster (free tier is fine)
3. Create a database user with read/write permissions
4. Get your connection string: `mongodb+srv://username:password@cluster.mongodb.net/snapchat-clone?retryWrites=true&w=majority`
5. Whitelist all IP addresses (0.0.0.0/0) for Render deployment

### Backend Environment Variables (Render)
- `MONGO_URI`: Your MongoDB Atlas connection string
- `FRONTEND_URL`: Your Vercel frontend URL (set after frontend deployment)
- `NODE_ENV`: production

### Frontend Environment Variables (Vercel)
- `REACT_APP_API_URL`: Your Render backend URL (set after backend deployment)

## Deployment Steps

### 1. Deploy Backend to Render

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Deploy to Render**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select your repository
   - Configure:
     - **Name**: snapchat-backend
     - **Environment**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Root Directory**: `backend`

3. **Set Environment Variables in Render**
   - Go to your service → Environment
   - Add:
     - `MONGO_URI`: Your MongoDB Atlas connection string
     - `NODE_ENV`: production
     - `FRONTEND_URL`: (Leave empty for now, update after frontend deployment)

4. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Note your backend URL (e.g., `https://snapchat-backend.onrender.com`)

### 2. Deploy Frontend to Vercel

1. **Deploy to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Configure:
     - **Root Directory**: `frontend/frontend`
     - **Framework Preset**: Create React App

2. **Set Environment Variables in Vercel**
   - Go to your project → Settings → Environment Variables
   - Add:
     - `REACT_APP_API_URL`: Your Render backend URL (e.g., `https://snapchat-backend.onrender.com`)

3. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Note your frontend URL (e.g., `https://snapchat-clone.vercel.app`)

### 3. Update Backend with Frontend URL

1. **Update Render Environment Variables**
   - Go to your Render service → Environment
   - Update `FRONTEND_URL` with your Vercel frontend URL
   - Redeploy the service

### 4. Test Your Deployment

1. **Test Backend**
   - Visit `https://your-backend.onrender.com/health`
   - Should return "OK"

2. **Test Frontend**
   - Visit your Vercel URL
   - Try registering a new user
   - Try logging in

## Troubleshooting

### Common Issues

1. **CORS Errors**
   - Make sure `FRONTEND_URL` is set correctly in Render
   - Check that your frontend URL is in the allowed origins

2. **Database Connection Issues**
   - Verify MongoDB Atlas connection string
   - Check that IP whitelist includes 0.0.0.0/0
   - Ensure database user has correct permissions

3. **Build Failures**
   - Check that all dependencies are in package.json
   - Verify build commands are correct
   - Check logs in Render/Vercel dashboard

### Useful Commands

```bash
# Test backend locally
cd backend
npm install
npm start

# Test frontend locally
cd frontend/frontend
npm install
npm start
```

## File Structure After Deployment

```
snapchat-clone/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   ├── render.yaml
│   └── env.example
├── frontend/
│   └── frontend/
│       ├── src/
│       ├── public/
│       ├── package.json
│       └── vercel.json
└── DEPLOYMENT_GUIDE.md
```
