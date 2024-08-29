import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import PostComments from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComments />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });


    it('Deve permitir adicionar dois comentários', async () => {
        render(<PostComments />);

        // Seleciona o textarea e o botão de envio
        const commentInput = screen.getByTestId('comment-input') as HTMLTextAreaElement;
        const submitButton = screen.getByTestId('submit-button');

        // Adiciona o primeiro comentário
        fireEvent.change(commentInput, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(submitButton);

        // Adiciona o segundo comentário
        fireEvent.change(commentInput, { target: { value: 'Segundo comentário' } });
        fireEvent.click(submitButton);

        // Aguarda atualizar com os novos comentários
        await waitFor(() => {
            expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
            expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
        });
    });
});