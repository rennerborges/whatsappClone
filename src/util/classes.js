export function SetClassName(defaultClass, classCondition, condition) {
    let className = [defaultClass];

    if (condition) {
        className.push(classCondition);
    }

    return className.join(' ');
}