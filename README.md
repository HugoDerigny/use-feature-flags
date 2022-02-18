# @quizeo/use-flags

/!\ Private usage only.

## Usage

### Install

Use `npm i @quizeo/use-flags`

### Implementation

```javascript
import { useFlags } from '@quizeo/use-flags'

function App() {
    const { flags, isFlagOn, getFlag } = useFlags({ apiUrl: '...', apiServiceToken: '...' })
}
```

## Reference

### useFlags

Function

**Parameters**

* Object :
```json
{
    apiUrl: <string>
    apiServiceToken`: <string>
}
```

### flags

List all flags that are available (on or off) for the specific service.

**Property**

```ts
Array<{
    key: string
    enabled: boolean
    variant: string
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
    variant: string
}
```