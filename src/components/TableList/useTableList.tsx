import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImagePreview from "../../components/TableList/ImagePreview";
import { Colors } from "../../theme/theme";
import { formatDate } from "../../utils/formatDate";
import { Action } from "./Action";
import Select from "./Select";
import * as Styled from "./styles";
import { Column, ColumnType, Mapper, TableListAction } from "./types";

interface Props {
  onCheckBoxChangeAll?: (checked: boolean) => void;
  onAction: (type: string, id: number, value?: any) => void;
  selectedOptions?: number[];
  onCheckBoxChange?: (data: any) => void;
}

const useTableList = ({
  onCheckBoxChangeAll,
  onAction,
  selectedOptions = [],
  onCheckBoxChange = () => undefined,
}: Props) => {
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  const handleHeaderCheckBoxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (onCheckBoxChangeAll) onCheckBoxChangeAll(checked);
    // eslint-disable-next-line no-param-reassign
    setChecked(event.target.checked);
  };

  const getColor = (columnValue: string, colorMapping?: Mapper<any>[]) => {
    const color = colorMapping?.find((c) => c.key === columnValue)?.value;
    return color || Colors.white[40050];
  };

  const handleCheckBoxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const obj = JSON.parse(event.target.value);
    onCheckBoxChange(obj);
  };

  const formatValue = (
    column: Column,
    value: any,
    id: number,
    colorMapping?: Mapper<any>[]
  ) => {
    switch (column.type) {
      case ColumnType.ActionComponent:
        return (
          <Styled.ActionContainer>
            {Array.isArray(value) ? (
              value.map((action: TableListAction) => (
                <Action
                  key={action.event}
                  {...action}
                  onClick={() => onAction(action.event, id)}
                />
              ))
            ) : (
              <Action
                key={value.event}
                {...value}
                onClick={() => onAction(value.event, id)}
              />
            )}
          </Styled.ActionContainer>
        );
      case ColumnType.Chip: {
        return (
          <Styled.TableChip bgColor={getColor(value, colorMapping)}>
            {value}
          </Styled.TableChip>
        );
      }
      case ColumnType.Select: {
        return (
          <>
            <Select
              options={value.options}
              confirmationRequired={value.confirmationRequired || null}
              confirmationButtonLabel={value.confirmationButtonLabel || null}
              confirmationDescription={value.confirmationDescription || null}
              confirmationTitle={value.confirmationTitle || null}
              declineButtonLabel={value.declineButtonLabel || null}
              label={value.label}
              initialValue={value.value}
              onAction={(selectedValue: string) =>
                onAction(value.event, id, selectedValue)
              }
            />
          </>
        );
      }
      case ColumnType.Image: {
        return <ImagePreview width="50px" height="50px" src={value} />;
      }
      case ColumnType.CheckBox: {
        return (
          <Styled.CheckboxContainer
            value={JSON.stringify(value)}
            checked={selectedOptions.includes(value)}
            onChange={handleCheckBoxChange}
          />
        );
      }
      case ColumnType.Date: {
        return formatDate(value);
      }
      default:
        return value;
    }
  };

  return { checked, handleHeaderCheckBoxChange, formatValue, navigate };
};

export default useTableList;
