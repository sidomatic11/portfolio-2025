# Easy Interaction Swapping

## Overview

The HeroCanvas component is now structured for easy interaction swapping during development. Each interaction is a separate file that you can quickly swap in and out.

## File Structure

```
app/components/
├── HeroCanvas.tsx                    # Main component
└── interactions/
    ├── index.ts                     # Export all interactions
    ├── mouseFollow.ts                 # Mouse-following circles
    ├── particles.ts                 # Floating particles
    ├── waves.ts                     # Wave patterns
    ├── geometric.ts                 # Rotating shapes
    └── minimal.ts                   # Simple dots
```

## How to Swap Interactions

### Method 1: Change Import (Easiest)

1. **Open** `app/components/HeroCanvas.tsx`
2. **Find** the import line:
   ```tsx
   import { drawMouseFollow } from "./interactions";
   ```
3. **Replace** with your desired interaction:
   ```tsx
   import { drawParticles } from "./interactions";
   ```
4. **Update** the function call in the animate loop:

   ```tsx
   // Change this line:
   drawMouseFollow(ctx, timeRef.current, mouseRef.current, centerRef.current);

   // To this (for particles):
   drawParticles(
   	ctx,
   	timeRef.current,
   	mouseRef.current,
   	particlesRef.current,
   	canvas
   );
   ```

### Method 2: Comment/Uncomment

Keep multiple imports and comment/uncomment the function call:

```tsx
import {
	drawMouseFollow,
	drawParticles,
	drawWaves,
	drawGeometric,
	drawMinimal,
} from "./interactions";

// In animate loop:
drawMouseFollow(ctx, timeRef.current, mouseRef.current, centerRef.current);
// drawParticles(ctx, timeRef.current, mouseRef.current, particlesRef.current, canvas);
// drawWaves(ctx, timeRef.current, canvas);
// drawGeometric(ctx, timeRef.current, canvas);
// drawMinimal(ctx, timeRef.current, canvas);
```

## Available Interactions

### 1. Mouse Follow (Current)

```tsx
import { drawMouseFollow } from "./interactions";
drawMouseFollow(ctx, time, mouse, center);
```

- **Features**: Smooth mouse following, brand colors
- **Best for**: Interactive backgrounds

### 2. Particles

```tsx
import { drawParticles } from "./interactions";
drawParticles(ctx, time, mouse, particles, canvas);
```

- **Features**: 50 floating particles, mouse attraction
- **Best for**: Dynamic, organic feel

### 3. Waves

```tsx
import { drawWaves } from "./interactions";
drawWaves(ctx, time, canvas);
```

- **Features**: Flowing wave patterns
- **Best for**: Calm, professional backgrounds

### 4. Geometric

```tsx
import { drawGeometric } from "./interactions";
drawGeometric(ctx, time, canvas);
```

- **Features**: Rotating shapes (triangles, squares, circles)
- **Best for**: Modern, structured aesthetics

### 5. Minimal

```tsx
import { drawMinimal } from "./interactions";
drawMinimal(ctx, time, canvas);
```

- **Features**: Simple rotating dots
- **Best for**: Clean, subtle backgrounds

## Quick Reference

| Interaction  | Import            | Function Call                                        |
| ------------ | ----------------- | ---------------------------------------------------- |
| Mouse Follow | `drawMouseFollow` | `drawMouseFollow(ctx, time, mouse, center)`          |
| Particles    | `drawParticles`   | `drawParticles(ctx, time, mouse, particles, canvas)` |
| Waves        | `drawWaves`       | `drawWaves(ctx, time, canvas)`                       |
| Geometric    | `drawGeometric`   | `drawGeometric(ctx, time, canvas)`                   |
| Minimal      | `drawMinimal`     | `drawMinimal(ctx, time, canvas)`                     |

## Adding New Interactions

1. **Create** a new file in `app/components/interactions/`
2. **Export** the function: `export const drawYourNew = (ctx, time, ...params) => { ... }`
3. **Add** to `index.ts`: `export { drawYourNew } from './yourNew';`
4. **Import** and use in `HeroCanvas.tsx`

## Benefits

- ✅ **Fast swapping**: Change interactions in seconds
- ✅ **Clean separation**: Each interaction is self-contained
- ✅ **Easy testing**: Comment/uncomment different interactions
- ✅ **Modular**: Add new interactions without touching existing code
- ✅ **Performance**: All interactions include viewport optimization

## Development Workflow

1. **Start** with mouse-follow (current)
2. **Test** different interactions by changing imports
3. **Customize** your favorite interaction
4. **Remove** unused interaction files
5. **Deploy** with your chosen interaction



