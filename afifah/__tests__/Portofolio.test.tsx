import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Portfolio from '../src/pages/index'; 
import { describe, test, expect, jest } from '@jest/globals';


// 1. Mocking Typed.js karena dia memanipulasi DOM secara eksternal yang sulit dites di environment JSDOM
jest.mock('typed.js', () => {
    return jest.fn().mockImplementation(() => {
        return { destroy: jest.fn() };
    });
});

// 2. Mocking Next/Image karena sering bikin masalah di testing environment
jest.mock('next/image', () => ({
    __esModule: true,
    default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
        // eslint-disable-next-line @next/next/no-img-element
        return <img {...props} alt={props.alt} />;
    },
}));

describe('Portfolio Component', () => {
  
  test('harus merender nama utama di halaman Home', () => {
    render(<Portfolio />);
    const nameElement = screen.getByText(/AFIFAH KHOIRUNNISA/i);
    expect(nameElement).toBeTruthy();
  });

  test('harus berpindah ke tab Projects saat tombol navigasi diklik', () => {
    render(<Portfolio />);
    
    // Ganti getByRole yang ambigu dengan pencarian berbasis atribut data-label
    const projectTabBtn = screen.getByTestId('PROJECTS'); 
    // ATAU jika tidak ingin menambah test-id, gunakan selector atribut:
    const navButtons = screen.getAllByRole('button');
    const targetBtn = navButtons.find(btn => btn.getAttribute('data-label') === 'PROJECTS');

if (targetBtn) fireEvent.click(targetBtn);
    
    if (projectTabBtn) {
        fireEvent.click(projectTabBtn);
    }

    // Cek apakah judul section project muncul
    const projectTitle = screen.getByText(/SELECTED_WORKS/i);
    expect(projectTitle).toBeTruthy();
  });

  test('fitur filter project harus berfungsi', () => {
    render(<Portfolio />);
    
    // Pindah ke tab project dulu
    const navButtons = screen.getAllByRole('button');
    const projectTabBtn = navButtons.find(btn => btn.getAttribute('data-label') === 'PROJECTS');
    if (projectTabBtn) fireEvent.click(projectTabBtn);

    const filterBtn = screen.getByRole('button', { name: /SOFTWARE ENG/i });
    fireEvent.click(filterBtn);

    // Pastikan project Laravel muncul
    expect(screen.getByText(/Web Development with Laravel/i)).toBeTruthy();

    // Pastikan project AI (Music Recommendation) hilang dari dokumen
    expect(screen.queryByText(/Music Recommendation System/i)).toBeNull();
  });

  test('tombol toggle theme harus mengganti mode', () => {
    render(<Portfolio />);
    const toggleBtn = screen.getByText(/🌙|☀️/i);
    
    // Default awal biasanya light (cek div pembungkus)
    const appShell = screen.getByRole('main').parentElement;
    
    fireEvent.click(toggleBtn);
    // Cek emoji berubah atau atribut data-theme berubah
    expect(toggleBtn.textContent).toBe('☀️');
  });
});