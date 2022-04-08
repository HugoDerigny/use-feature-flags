# use-feature-flags

> /!\ COMING SOON !!! You need to use the **Feature flags API** to use this hook.

## Usage

### Install

`npm i use-feature-flags`

### Implementation

> By default, if a flag cannot be fetched, it will be **false**. 

> The Feature Flag API uses the **User-Agent header** from the request to determine if the user has access to the feature.

```javascript
import { FlagsProvider, useFlags } from 'use-feature-flags'

function App() {
    return <FlagsProvider
        config={{
            apiUrl: 'your-self-hosted-api-url',
            apiServiceId: 'the-service-id',
            apiAuthorization: 'the-authorization-key-you-defined-in-the-api',
            debug: true // optional, default: false
        }}
    >
        <MyComponent/>
    </FlagsProvider>
}

function MyComponent() {
    const { isFlagOn, flags, getFlag } = useFlags()

    /**
     * Two usages :
     * - with getFlag(key) => returns the flag object with the value and the enabled status
     * - with isFlagOn(key) => returns the enabled status
     */
    return <div>
        {isFlagOn('my-welcome-message') && <p>{getFlag('my-welcome-message').value}</p>}
        {isFlagOn('my-flag-key') ? <p>Hello world !</p> : <p>This feature is off</p>}
    </div>
}
```

## Reference

```typescript
// FlagsProvider
interface UseFlagsParams {
    config: {
        apiUrl: string
        apiServiceId: string
        apiAuthorization: string,
        debug?: boolean
    }
}

// useFlags()
interface UseFlagsHook {
    // List all flags from the specified services
    flags: Flag[]
    // Return a specified flag
    getFlag: (key: string) => Flag | undefined
    // Return the enabled status of a specified flag
    isFlagOn: (key: string) => boolean
}

interface Flag {
    key: string
    enabled: boolean
    value: string
}
```