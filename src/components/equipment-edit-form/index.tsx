import { CardContent } from '@mui/material'
import { theme } from '../../styles/theme'
import { Button } from '../button'
import DescriptionTextField from '../description-text-field'
import BasicTextFields from '../text-field'
import {
  FormStyled,
  StyledCard,
  StyledBox,
  DescriptionFieldBox,
  BiggestBox,
  ButtonFieldBox
} from './styles'

const EquipmentEditForm = () => {
  return (
    <StyledCard>
      <CardContent>
        <FormStyled>
          <BiggestBox>
            <StyledBox>
              <BasicTextFields
                size="small"
                id="CPU"
                name="CPU"
                label="CPU"
                variant="outlined"
                type="cpu"
                color="primary"
              />
              <BasicTextFields
                size="small"
                id="Marca"
                name="Marca"
                label="Marca"
                variant="outlined"
                type="marca"
                color="primary"
              />
              <BasicTextFields
                size="small"
                id="Memoria RAM"
                name="Memoria RAM"
                label="Memória RAM"
                variant="outlined"
                type="Memoria ram"
                color="primary"
              />
            </StyledBox>
            <StyledBox>
              <BasicTextFields
                size="small"
                id="n-tombamento"
                name="n-tombamento"
                label="N° Tombamento"
                variant="outlined"
                type="n-tombamento"
                color="primary"
              />
              <BasicTextFields
                size="small"
                id="Modelo"
                name="Modelo"
                label="Modelo"
                variant="outlined"
                type="modelo"
                color="primary"
              />
              <BasicTextFields
                size="small"
                id="Armazenamento"
                name="Armazenamento"
                label="Armazenamento"
                variant="outlined"
                type="Armazenamento"
                color="primary"
              />
            </StyledBox>
            <StyledBox>
              <BasicTextFields
                size="small"
                id="n-serie"
                name="n-serie"
                label="N° Série"
                variant="outlined"
                type="n-serie"
                color="primary"
              />
              <BasicTextFields
                size="small"
                id="Tipo Aquisicao"
                name="Tipo Aquisicao"
                label="Tipo Aquisição"
                variant="outlined"
                type="tipo aquisicao"
                color="primary"
              />
              <BasicTextFields
                size="small"
                id="Processador"
                name="Processador"
                label="Processador"
                variant="outlined"
                type="Processador"
                color="primary"
              />
            </StyledBox>
          </BiggestBox>

          <DescriptionFieldBox>
            <DescriptionTextField
              size="small"
              id="descrição"
              rows="4"
              multiline={true}
              label="Descrição"
            />
          </DescriptionFieldBox>

          <ButtonFieldBox>
            <Button
              name="backButton"
              id="voltar"
              variant="contained"
              styledColor={theme.palette.grey[300]}
              textColor="black"
              classes={{ root: 'rootBack' }}>
              Voltar
            </Button>
            <Button
              id="editar"
              name="editButton"
              variant="contained"
              type="submit"
              styledColor={theme.palette.primary.main}
              classes={{ root: 'rootEdit' }}>
              Salvar
            </Button>
          </ButtonFieldBox>
        </FormStyled>
      </CardContent>
    </StyledCard>
  )
}

export default EquipmentEditForm
