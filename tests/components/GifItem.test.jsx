import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('tests for GifItem component', () => {

    const title = 'Título de prueba';
    const url = 'http://ejemplo.com/uno.jpg';

    test('should match with the snapshot', () => {
        render(<GifItem title={title} url={url} />)
        expect(screen).toMatchSnapshot();
    })

    test('should show image that match url and alt text', () => {
        render(<GifItem title={title} url={url} />)
        const { src, alt } = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('should show title on card', () => {
        render(<GifItem title={title} url={url} />)

        expect(screen.getByText(title)).toBeTruthy();
    })
})