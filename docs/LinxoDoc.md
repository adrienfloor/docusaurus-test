
## Code blocks

### Examples of syntax highlighting in different languages
- Each of these code blocks have a "copy to clipboard" button

```javascript
// JAVASCRIPT
const s = 'JavaScript syntax highlighting'
alert(s)
```

```python
# PYTHON
s = "Python syntax highlighting"
print s
```

```java
// JAVA
String s = "Java syntax highlighting";
System.out.println(s);
```

### Example of interactive live editor

```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });
  function tick() {
    setDate(new Date());
  }
  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```