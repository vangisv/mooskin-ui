import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IInputCallbackData } from '../_utils/types/commonTypes';
import { Box } from '../Box/Box';
import { IBoxComponentProps } from '../Box/model';
import { IActionsDropdownComponentProps, IActionsDropdownItemComponentProps } from './model';

// Styled Components
import {
	StyledActionsDropdownArrow,
	StyledActionsDropdownFadeIn,
	StyledActionsDropdownFadeOut,
	StyledActionsDropdownItem,
	StyledActionsDropdownButtonClose,
	StyledActionDropdownOverlay
} from './styles';

// Transitions
import { Transition } from 'react-transition-group';
const DropdownComponents = {
	entered: StyledActionsDropdownFadeIn,
	entering: StyledActionsDropdownFadeIn,
	exited: null,
	exiting: StyledActionsDropdownFadeOut,
	unmounted: null
};

/**
 * ActionsDropdown
 */
export const ActionsDropdown: React.FC<IActionsDropdownComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	const [hasArrow, setHasArrow] = React.useState(false);

	const batchClickHandler = (
		e: React.MouseEvent<HTMLElement>,
		data: IInputCallbackData,
		callback?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void
	) => {
		props.onClickItem && props.onClickItem(e, data);
		callback && callback(e, data);
	};

	const recurseChildren = (children: any): any => {
		if (!children) {
			return null;
		}

		return React.Children.map(children, (child, i) => {
			if (React.isValidElement<IActionsDropdownItemComponentProps>(child) && child.type === ActionsDropdownItem) {
				return React.cloneElement(child, {
					children: recurseChildren((child.props as any).children),
					key: i,
					onClick: (e) => batchClickHandler(e, { dataLabel: child.props.dataLabel, value: child.props.value }, child.props.onClick)
				} as IActionsDropdownItemComponentProps);
			}

			if (React.isValidElement<IBoxComponentProps>(child) && child.type === ActionsDropdownArrow) {
				!hasArrow && setHasArrow(true);
				return React.cloneElement(child, {
					children: recurseChildren((child.props as any).children),
					key: i
				} as IBoxComponentProps);
			}

			if (React.isValidElement(child) && (child.props as any).children) {
				return React.cloneElement(child, { key: i, children: recurseChildren((child.props as any).children) } as any);
			}
			return child;
		});
	};

	return (
		<Transition addEndListener={() => undefined} unmountOnExit in={props.isOpen} timeout={145}>
			{(state) => {
				const ActionDropdownComponent = DropdownComponents[state];

				if (ActionDropdownComponent) {
					return (
						<>
							<StyledActionDropdownOverlay
								w={[0, 0, '100vw', '100vw']}
								h={[0, 0, '100vh', '100vh']}
								position={['relative', 'relative', 'fixed', 'fixed']}
								noRender={['lg', 'md']}
								onClick={props.onClose}
							/>
							<ActionDropdownComponent
								boxShadow="base"
								position={['relative', 'relative', 'fixed', 'fixed']}
								borderRadius={['2px', '2px', '8px', '8px']}
								bottom={['unset', 'unset', '73px', '73px']}
								left={['unset', 'unset', '10px', '10px']}
								right={['unset', 'unset', '10px', '10px']}
								maxH={['unset', 'unset', '415px', '415px']}
								overflowY={['unset', 'unset', 'auto', 'auto']}
								zIndex={[2, 2, 6, 6]}
								{...props}
							>
								<Box position="absolute" />
								{!hasArrow && <ActionsDropdownArrow boxShadow="base" />}
								{recurseChildren(props.children)}
							</ActionDropdownComponent>
							<StyledActionsDropdownButtonClose
								boxShadow="base"
								position={['relative', 'relative', 'fixed', 'fixed']}
								noRender={['lg', 'md']}
								borderRadius={['2px', '2px', '8px', '8px']}
								bottom={['unset', 'unset', '10px', '10px']}
								left={['unset', 'unset', '10px', '10px']}
								right={['unset', 'unset', '10px', '10px']}
								onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => props.onClose && props.onClose}
							>
								Close
							</StyledActionsDropdownButtonClose>
						</>
					);
				}
				return null;
			}}
		</Transition>
	);
});

ActionsDropdown.displayName = 'ActionsDropdown';

/**
 * ActionsDropdownItem
 */
export const ActionsDropdownItem: React.FC<IActionsDropdownItemComponentProps> = withMooskinContext(
	({ className = '', style = {}, ...props }) => {
		return (
			<StyledActionsDropdownItem
				className={className}
				textAlign={['unset', 'unset', 'center', 'center']}
				p={['', '', '16px 16px 16px', '16px 16px 16px']}
				fontSize={['12px', '12px', '20px', '20px']}
				fontWeight={['bold', 'bold', 400, 400]}
				{...props}
			/>
		);
	}
);

ActionsDropdownItem.displayName = 'ActionsDropdownItem';

/**
 * ActionsDropdownArrow
 */
export const ActionsDropdownArrow: React.FC<IBoxComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return <StyledActionsDropdownArrow className={className} d={['block', 'block', 'none', 'none']} {...props} />;
});

ActionsDropdownArrow.displayName = 'ActionsDropdownArrow';
