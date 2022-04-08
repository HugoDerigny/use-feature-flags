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

### flags

List all flags that are available (on or off) for the specific service.

**Property**

```ts
Array<{
    key: string
    enabled: boolean
    value: string
}>
```

### isFlagOn

Function that tell if a flag is on or off.

**Parameter**

- `key`: *string*

**Return**

`true|false`


### getFlag

Function that return a flag.

**Paremeter**

- `key`: *string*

**Return**

```json
{
    key: string
    enabled: boolean
    value: string
}
```