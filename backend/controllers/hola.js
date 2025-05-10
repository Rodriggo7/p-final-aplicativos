export function hola(app) {
    app.get(
        '/hola',
        (req, res) => {
        res.send('Hola, mundo!');
    });
    app.post(
        '/chau',
        (req, res) => {
        res.send('Chau, mundo!');
    });
}