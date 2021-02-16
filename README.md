# NP-if
Conditional render component for React

####Motivation:
We wrote this component due the lack of React's conditional rendering support.
We intend to create a component that works similar to Angular's *ngIf function.


####Usage:

```javascript
    import NPIf from "np-if";
    import NPElse from "np-if/src/NPElse";

    const condition = true;
    <NPIf condition={condition}>
        <div>Your content</div>
        <NPElse>
                <div>Your other content </div>
        </NPElse>
    </NPIf>
```
    
#### Testing
We created a few tests. You can type `npm run test` to run them.

#### Bug report
Submit your issues at [https://github.com/Nodeport-SA-de-CV/NP-if/issues](https://github.com/Nodeport-SA-de-CV/NP-if/issues)

#### Contributing
Submit your pull request at [https://github.com/Nodeport-SA-de-CV/NP-if/pulls](https://github.com/Nodeport-SA-de-CV/NP-if/pulls)

#### License
We use GPLv3. TL;DR: [https://gist.github.com/kn9ts/cbe95340d29fc1aaeaa5dd5c059d2e60](https://gist.github.com/kn9ts/cbe95340d29fc1aaeaa5dd5c059d2e60)

#### Support
We provide support for all our free software components. Write us at <contact@nodeport.co>

