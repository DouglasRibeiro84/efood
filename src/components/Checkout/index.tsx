import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'

import Button from '../Button'

import { usePurchaseMutation } from '../../services/api'
import { close, clear } from '../../store/reducers/cart'

import { Card, Cep, Expires, Form, Input, NumberCard } from './styles'
import { RootReducer } from '../../store'

type CheckoutProps = {
  onBack: () => void
  goPayment?: () => void
}

type DeliveryFields =
  | 'receiver'
  | 'address'
  | 'city'
  | 'zipCode'
  | 'addressNumber'
  | 'complement'

const Checkout = ({ onBack, goPayment }: CheckoutProps) => {
  const [isPayment, setIsPayment] = useState(false)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const [formError, setFormError] = useState('')
  const items = useSelector((state: RootReducer) => state.cart.items)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
    dispatch(clear())
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      addressNumber: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      expMonth: '',
      expYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(3, 'Mínimo de 3 caracteres')
        .required('Campo obrigatório'),

      address: Yup.string()
        .min(5, 'Mínimo de 5 caracteres')
        .required('Campo obrigatório'),

      city: Yup.string()
        .min(3, 'Mínimo de 3 caracteres')
        .required('Campo obrigatório'),

      zipCode: Yup.string()
        .test('zipCode-valid', 'CEP inválido', (value) => {
          const cleaned = value?.replace(/[^0-9]/g, '') || ''
          return cleaned.length === 8
        })
        .required('Campo obrigatório'),

      addressNumber: Yup.string()
        .min(1, 'Informe um número válido')
        .required('Campo obrigatório'),

      complement: Yup.string().min(3, 'Mínimo de 3 caracteres').notRequired(),

      cardName: Yup.string()
        .min(3, 'Mínimo de 3 caracteres')
        .required('Campo obrigatório'),

      cardNumber: Yup.string()
        .test('cardNumber-valid', 'Número do cartão inválido', (value) => {
          const cleaned = value?.replace(/\s/g, '').replace(/_/g, '') || ''
          return cleaned.length === 16
        })
        .required('Campo obrigatório'),

      cvv: Yup.string()
        .test('cvv-valid', 'CVV inválido', (value) => {
          const cleaned = value?.replace(/_/g, '') || ''
          return cleaned.length === 3
        })
        .required('Campo obrigatório'),

      expMonth: Yup.string()
        .test('expMonth-valid', 'Mês inválido', (value) => {
          const cleaned = value?.replace(/_/g, '') || ''
          return (
            cleaned.length === 2 &&
            parseInt(cleaned, 10) >= 1 &&
            parseInt(cleaned, 10) <= 12
          )
        })
        .required('Campo obrigatório'),

      expYear: Yup.string()
        .test('expYear-valid', 'Ano inválido', (value) => {
          const cleaned = value?.replace(/_/g, '') || ''
          return cleaned.length === 2
        })
        .required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      console.log('Enviando compra:', {
        products: [
          {
            id: 1,
            price: 0
          }
        ],
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: values.addressNumber,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: values.cvv,
            expires: {
              month: values.expMonth,
              year: values.expYear
            }
          }
        }
      })

      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: form.values.receiver,
          address: {
            description: form.values.address,
            city: form.values.city,
            zipCode: form.values.zipCode,
            number: Number(form.values.addressNumber),
            complement: form.values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expMonth),
              year: Number(values.expYear)
            }
          }
        }
      })
    }
  })

  const handleContinueToPayment = () => {
    const requiredFields: DeliveryFields[] = [
      'receiver',
      'address',
      'city',
      'zipCode',
      'addressNumber'
    ]

    const touchedFields = form.touched as Record<DeliveryFields, boolean>

    requiredFields.forEach((field) => {
      if (!touchedFields[field]) {
        form.setFieldTouched(field, true)
      }
    })

    form.validateForm().then((errors) => {
      const hasErrors = requiredFields.some((field) => !!errors[field])

      if (!hasErrors) {
        setFormError('')
        setIsPayment(true)
        if (goPayment) goPayment()
      } else {
        setFormError(
          'Preencha os campos obrigatórios corretamente antes de continuar.'
        )
      }
    })
  }

  const handleBackToAddress = () => {
    setIsPayment(false)
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isInvalid && isTouched

    return hasError
  }

  const hasFormErrors = () => {
    return Object.keys(form.errors).length > 0 && form.submitCount > 0
  }

  const getFormErrorClass = () => {
    return hasFormErrors() ? 'error' : ''
  }

  return (
    <>
      {isSuccess && data ? (
        <Card>
          <h3>Pedido realizado - {data.orderId}</h3>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <Button
            onClick={() => {
              onBack()
              closeCart()
            }}
          >
            Concluir
          </Button>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          {!isPayment && (
            <Form>
              <h3>Entrega</h3>
              <Input>
                <label htmlFor="receiver">Quem irá receber</label>
                <input
                  type="text"
                  id="receiver"
                  name="receiver"
                  value={form.values.receiver}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('receiver') ? 'error' : ''}
                />
              </Input>
              <Input>
                <label htmlFor="address">Endereço</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={form.values.address}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('address') ? 'error' : ''}
                />
              </Input>
              <Input>
                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('city') ? 'error' : ''}
                />
              </Input>
              <Cep>
                <Input>
                  <label htmlFor="zipCode">Cep</label>
                  <InputMask
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={form.values.zipCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('zipCode') ? 'error' : ''}
                    mask="99999-999"
                  />
                </Input>
                <Input>
                  <label htmlFor="addressNumber">Número</label>
                  <input
                    type="text"
                    id="addressNumber"
                    name="addressNumber"
                    value={form.values.addressNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('addressNumber') ? 'error' : ''
                    }
                  />
                </Input>
              </Cep>
              <Input>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  type="text"
                  id="complement"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('complement') ? 'error' : ''}
                />
              </Input>
              <Button type="button" onClick={handleContinueToPayment}>
                Continuar com o pagamento
              </Button>
              {formError && <small>{formError}</small>}
              <Button type="button" onClick={onBack}>
                Voltar para o carrinho
              </Button>
            </Form>
          )}

          {isPayment && (
            <Form>
              <h3>Pagamento</h3>
              <Input>
                <label htmlFor="cardName">Nome do cartão</label>
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  value={form.values.cardName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardName') ? 'error' : ''}
                />
              </Input>
              <NumberCard>
                <Input>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <InputMask
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                    mask="9999 9999 9999 9999"
                  />
                </Input>
                <Input>
                  <label htmlFor="cvv">CVV</label>
                  <InputMask
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={form.values.cvv}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cvv') ? 'error' : ''}
                    mask="999"
                  />
                </Input>
              </NumberCard>
              <Expires>
                <Input>
                  <label htmlFor="expMonth">Mês de vencimento</label>
                  <InputMask
                    type="text"
                    id="expMonth"
                    name="expMonth"
                    value={form.values.expMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('expMonth') ? 'error' : ''}
                    mask="99"
                  />
                </Input>
                <Input>
                  <label htmlFor="expYear">Ano de vencimento</label>
                  <InputMask
                    type="text"
                    id="expYear"
                    name="expYear"
                    value={form.values.expYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('expYear') ? 'error' : ''}
                    mask="99"
                  />
                </Input>
              </Expires>

              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Finalizando compra ...' : 'Finalizar compra'}
              </Button>
              {hasFormErrors() && (
                <small className={getFormErrorClass()}>
                  Preencha os campos obrigatórios corretamente antes de
                  continuar.
                </small>
              )}
              <Button type="button" onClick={handleBackToAddress}>
                Voltar para a edição de endereço
              </Button>
            </Form>
          )}
        </form>
      )}
    </>
  )
}

export default Checkout
